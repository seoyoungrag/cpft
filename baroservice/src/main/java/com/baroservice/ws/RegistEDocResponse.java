
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="RegistEDocResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "registEDocResult"
})
@XmlRootElement(name = "RegistEDocResponse")
public class RegistEDocResponse {

    @XmlElement(name = "RegistEDocResult")
    protected int registEDocResult;

    /**
     * registEDocResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getRegistEDocResult() {
        return registEDocResult;
    }

    /**
     * registEDocResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setRegistEDocResult(int value) {
        this.registEDocResult = value;
    }

}
