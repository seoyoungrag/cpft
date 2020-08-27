
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>FaxMessage complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType name="FaxMessage"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="SendKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendFileName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendPageCount" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="SuccessPageCount" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="SendResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SenderNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ReceiveCorp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ReceiverName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ReceiverNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="RefKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendState" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "FaxMessage", propOrder = {
    "sendKey",
    "id",
    "sendFileName",
    "sendPageCount",
    "successPageCount",
    "sendResult",
    "senderNum",
    "receiveCorp",
    "receiverName",
    "receiverNum",
    "sendDT",
    "refKey",
    "sendState"
})
public class FaxMessage {

    @XmlElement(name = "SendKey")
    protected String sendKey;
    @XmlElement(name = "ID")
    protected String id;
    @XmlElement(name = "SendFileName")
    protected String sendFileName;
    @XmlElement(name = "SendPageCount")
    protected int sendPageCount;
    @XmlElement(name = "SuccessPageCount")
    protected int successPageCount;
    @XmlElement(name = "SendResult")
    protected String sendResult;
    @XmlElement(name = "SenderNum")
    protected String senderNum;
    @XmlElement(name = "ReceiveCorp")
    protected String receiveCorp;
    @XmlElement(name = "ReceiverName")
    protected String receiverName;
    @XmlElement(name = "ReceiverNum")
    protected String receiverNum;
    @XmlElement(name = "SendDT")
    protected String sendDT;
    @XmlElement(name = "RefKey")
    protected String refKey;
    @XmlElement(name = "SendState")
    protected int sendState;

    /**
     * sendKey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendKey() {
        return sendKey;
    }

    /**
     * sendKey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendKey(String value) {
        this.sendKey = value;
    }

    /**
     * id 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getID() {
        return id;
    }

    /**
     * id 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setID(String value) {
        this.id = value;
    }

    /**
     * sendFileName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendFileName() {
        return sendFileName;
    }

    /**
     * sendFileName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendFileName(String value) {
        this.sendFileName = value;
    }

    /**
     * sendPageCount 속성의 값을 가져옵니다.
     * 
     */
    public int getSendPageCount() {
        return sendPageCount;
    }

    /**
     * sendPageCount 속성의 값을 설정합니다.
     * 
     */
    public void setSendPageCount(int value) {
        this.sendPageCount = value;
    }

    /**
     * successPageCount 속성의 값을 가져옵니다.
     * 
     */
    public int getSuccessPageCount() {
        return successPageCount;
    }

    /**
     * successPageCount 속성의 값을 설정합니다.
     * 
     */
    public void setSuccessPageCount(int value) {
        this.successPageCount = value;
    }

    /**
     * sendResult 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendResult() {
        return sendResult;
    }

    /**
     * sendResult 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendResult(String value) {
        this.sendResult = value;
    }

    /**
     * senderNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSenderNum() {
        return senderNum;
    }

    /**
     * senderNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSenderNum(String value) {
        this.senderNum = value;
    }

    /**
     * receiveCorp 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceiveCorp() {
        return receiveCorp;
    }

    /**
     * receiveCorp 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceiveCorp(String value) {
        this.receiveCorp = value;
    }

    /**
     * receiverName 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceiverName() {
        return receiverName;
    }

    /**
     * receiverName 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceiverName(String value) {
        this.receiverName = value;
    }

    /**
     * receiverNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceiverNum() {
        return receiverNum;
    }

    /**
     * receiverNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceiverNum(String value) {
        this.receiverNum = value;
    }

    /**
     * sendDT 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendDT() {
        return sendDT;
    }

    /**
     * sendDT 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendDT(String value) {
        this.sendDT = value;
    }

    /**
     * refKey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRefKey() {
        return refKey;
    }

    /**
     * refKey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRefKey(String value) {
        this.refKey = value;
    }

    /**
     * sendState 속성의 값을 가져옵니다.
     * 
     */
    public int getSendState() {
        return sendState;
    }

    /**
     * sendState 속성의 값을 설정합니다.
     * 
     */
    public void setSendState(int value) {
        this.sendState = value;
    }

}
