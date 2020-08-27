
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>CashBillLog complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="CashBillLog"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="Seq" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="LogType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="LogDateTime" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Memo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CashBillLog", propOrder = {
    "seq",
    "logType",
    "logDateTime",
    "memo"
})
public class CashBillLog {

    @XmlElement(name = "Seq")
    protected int seq;
    @XmlElement(name = "LogType")
    protected String logType;
    @XmlElement(name = "LogDateTime")
    protected String logDateTime;
    @XmlElement(name = "Memo")
    protected String memo;

    /**
     * seq �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getSeq() {
        return seq;
    }

    /**
     * seq �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setSeq(int value) {
        this.seq = value;
    }

    /**
     * logType �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLogType() {
        return logType;
    }

    /**
     * logType �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLogType(String value) {
        this.logType = value;
    }

    /**
     * logDateTime �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLogDateTime() {
        return logDateTime;
    }

    /**
     * logDateTime �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLogDateTime(String value) {
        this.logDateTime = value;
    }

    /**
     * memo �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMemo() {
        return memo;
    }

    /**
     * memo �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMemo(String value) {
        this.memo = value;
    }

}
